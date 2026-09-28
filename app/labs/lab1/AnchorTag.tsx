export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
        rel="noreferrer"
        target="_blank"
      >
        MDN: table element
      </a>
      <br />
      <a href="https://soundcloud.com/discover" id="wd-your-link">
        SoundCloud
      </a>
      <br />
      <a
        href="https://github.com/Prabhpreetsingh1472"
        id="wd-your-github"
        rel="noreferrer"
        target="_blank"
      >
        My Github
      </a>
    </>
  );
}
