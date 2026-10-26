export default function FunctionDestructing() {
  const add = (a: number, b: number) => a + b;
  const sum = add(1, 2);
  const subtract = ({ a, b }: { a: number; b: number }) => a - b;
  const difference = subtract({ a: 4, b: 2 });
  const multiply = ({ a, b }: { a: number; b: number }) => a * b;
  const greet = ({ name = "Ada" }: { name?: string } = {}) => `Hello ${name}`;
  const divide = ({ a, b }: { a: number; b: number }) => a / b;
  const quotient = divide({ a: 10, b: 2 });
  return (
    <div id="wd-function-destructing">
      <h2>Function Destructing</h2>
      const add = (a, b) =&gt; a + b; <br />
      const sum = add(1, 2);          <br />
      const subtract = (&#123; a, b &#125;) =&gt; a - b; <br />
      const difference = subtract(&#123; a: 4, b: 2 &#125;); <br />
      const multiply = (&#123; a, b &#125;) =&gt; a * b; <br />
      const product = multiply(&#123; a: 3, b: 4 &#125;); <br />
      const greet = (&#123; name = "Ada" &#125; = &#123;&#125;) =&gt; `Hello $&#123;name&#125;`; <br />
      const divide = (&#123; a, b &#125;) =&gt; a / b; <br />
      const quotient = divide(&#123; a: 10, b: 2 &#125;); <br />
      sum = {sum}                     <br />
      difference = {difference}       <br />
      product = {multiply({ a: 3, b: 4 })}             <br />
      greet = {greet()}               <br />
      quotient = {quotient}
      <hr />
    </div>
  );
}
