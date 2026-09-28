export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading another image from the internet:
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/as11-40-5878/as11-40-5878~small.jpg"
        width="200px"
        alt="Apollo 11 astronaut on the Moon"
      />
      <br />
      <img
        id="wd-your-image"
        src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/136568-toaajtvgpq-1581694980.jpg"
        height="200px"
        alt="A Farmer in Punjab"
      />

    </div>
  );
}