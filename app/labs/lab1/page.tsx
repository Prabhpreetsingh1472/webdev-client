import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTag from "./ListTags";
import TableTag from "./Tables";
import Image from "./Images";
import Forms from "./forms/Forms"
import HighlightedParagraph from "./HighlightedParagraph";
import HighlightedBox from "./HighlightedBox";
import AnchorTag from "./AnchorTag";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <HeadingTags />
      <ParagraphTag />
      <ListTag />
      <TableTag />
      <Image />
      <Forms />
      <HighlightedParagraph />
      <HighlightedBox />
      <AnchorTag />
    </div>
  );
}