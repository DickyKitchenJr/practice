import mongoose from "mongoose";
import dns from "dns";

// Public resolvers used only when local DNS refuses Atlas SRV lookups.
const DEFAULT_DNS_SERVERS = ["8.8.8.8", "1.1.1.1"];

const getDnsServersFromEnv = () => {
  const configured = process.env.MONGO_DNS_SERVERS;
  if (!configured) {
    return DEFAULT_DNS_SERVERS;
  }

  return configured
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
};

const connectWithUri = async (uri) => {
  return mongoose.connect(uri);
};

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  try {
    const connectionInstance = await connectWithUri(mongoUri);
    console.log(`\n MongoDB connected:
            ${connectionInstance.connection.host}`);
  } catch (error) {
    // Retry once with explicit DNS servers when mongodb+srv fails at querySrv.
    // This targets environments where Node DNS gets ECONNREFUSED from local resolvers.
    const shouldRetryWithDnsOverride =
      mongoUri?.startsWith("mongodb+srv://") &&
      error?.code === "ECONNREFUSED" &&
      error?.syscall === "querySrv";

    if (shouldRetryWithDnsOverride) {
      try {
        // Uses MONGO_DNS_SERVERS if provided, otherwise falls back to known public resolvers.
        dns.setServers(getDnsServersFromEnv());
        const connectionInstance = await connectWithUri(mongoUri);
        console.log(`\n MongoDB connected:
            ${connectionInstance.connection.host}`);
        return;
      } catch (retryError) {
        console.error(`Error connecting to MongoDB: ${retryError.message}`);
        process.exit(1);
      }
    }

    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
