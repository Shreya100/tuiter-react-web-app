import House from "./house";
import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariable from "./boolean-variables";
import IfElse from "./if-else";
import Ternary from "./ternary";
import WorkingWithFunctions from "./working-with-functions";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
import WorkingWithArrays from "./working-with-arrays";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          {/* <h1>JavaScript</h1> */}
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariable/>
        <IfElse/>
        <Ternary/>
        <WorkingWithFunctions/>
        <FunctionParenthesisAndParameters/>
        <WorkingWithArrays/>
         <House/>
         <Spread/>
         <Destructing/>
         <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript
 
 