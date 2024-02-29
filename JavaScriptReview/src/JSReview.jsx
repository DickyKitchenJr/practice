import "./JSReview.css";

function JSReview() {
  const forPractice = () => {
    //demonstrating use of a for loop
    let sentence = "";
    const array = ["this", "is", "how", "a", "for", "loop", "works"];

    for (let i = 0; i <= array.length - 1; i++) {
      sentence = sentence.concat(array[i] + " ");
    }
    return sentence;
  };

  const forLoopCode = `const forPractice = () => {
    //demonstrating use of a for loop
    let sentence = '';
    const array = ["this", "is", "how", "a", "for", "loop", "works"]
    
    for(let i = 0; i <= array.length -1; i++){
      sentence = sentence.concat(array[i] + " ")
    }
    return sentence;
  }`;

  const forOfPractice = () => {
    //demonstrating use of for...of loop
    let sentence = "";
    const array = ["this", "is", "how", "a", "for...of", "loop", "works"];

    for (const part of array) {
      sentence = sentence.concat(part + " ");
    }
    return sentence;
  };

  const forOfLoopCode = `const forOfPractice = () => {
    //demonstrating use of for...of loop
    let sentence = "";
    const array = ["this", "is", "how", "a", "for...of", "loop", "works"];

    for (const part of array) {
      sentence = sentence.concat(part + " ");
    }
    return sentence;
  };`;

  const forEachPractice = () => {
    //demonstrating use of for...each loop
    let sentence = "";
    const array = ["this", "is", "how", "a", "for...each", "loop", "works"];
    array.forEach(function (word) {
      sentence = sentence.concat(word + " ");
    });
    return sentence;
  };

  const forEachLoopCode = `const forEachPractice = () => {
    //demonstrating use of for...each loop
    let sentence = "";
    const array = ["this", "is", "how", "a", "for...each", "loop", "works"];
    array.forEach(function (word) {
      sentence = sentence.concat(word + " ");
    });
    return sentence;
  };`;

  const forInPractice = () => {
    //demonstrating use of for...in loop
    let sentence = "";
    const object = {
      word1: "this",
      word2: "is",
      word3: "how",
      word4: "a",
      word5: "for...in",
      word6: "loop",
      word7: "works",
    };
    for (const word in object) {
      sentence = sentence.concat(object[word] + " ");
    }
    return sentence;
  };

  const forInLoopCode = `const forInPractice = () => {
    //demonstrating use of for...in loop
    let sentence = "";
    const object = {
      word1: "this",
      word2: "is",
      word3: "how",
      word4: "a",
      word5: "for...in",
      word6: "loop",
      word7: "works",
    };
    for(const word in object){
      sentence = sentence.concat(object[word] + " ");
    }
    return sentence
  };`;

  return (
    <>
      <h1 className="heading">JavaScript Review</h1>

      <main className="main">
        <h2>For Loop</h2>
        <p>Code:</p>
        <pre>
          <code>{forLoopCode}</code>
        </pre>
        <p>Return:</p>
        <p>{forPractice()}</p>
        <br />

        <h2>For Of Loop</h2>
        <p>Code:</p>
        <pre>
          <code>{forOfLoopCode}</code>
        </pre>
        <p>Return:</p>
        <p>{forOfPractice()}</p>
        <br />

        <h2>For Each Loop</h2>
        <p>Code:</p>
        <pre>
          <code>{forEachLoopCode}</code>
        </pre>
        <p>Return:</p>
        <p>{forEachPractice()}</p>
        <br />

        <h2>For In Loop (objects)</h2>
        <p>Code:</p>
        <pre>
          <code>{forInLoopCode}</code>
        </pre>
        <p>Return:</p>
        <p>{forInPractice()}</p>
        <br />
      </main>
    </>
  );
}

export default JSReview;
