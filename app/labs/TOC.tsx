import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-labs">
      <h3>Table of Contents</h3>
      <ul>
        <li>
          <Link href="/labs/lab1">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link id="wd-toc-book-link" href="/book/ch1">
            Chapter 1
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
      Prabhpreet Singh
    </div>
  );
}
