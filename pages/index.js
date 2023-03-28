import styles from "@/styles/Home.module.css";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main>
        <div className="contentWrapper">
          <ul>
            <li>
              <h2>Blog Title</h2>
              <p>Subtitle</p>
              <div className="metaData">Metadata</div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
