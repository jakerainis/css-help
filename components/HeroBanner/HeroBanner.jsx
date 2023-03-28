import MainNav from "@/components/MainNav/MainNav";
import css from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <header className={css.root}>
      <section className={css.navBar}>
        <div className="logo">Matt @ Work</div>
        <MainNav />
      </section>

      <h1>Matt @ Work</h1>
      <h2>Clean Code + Coffee == Happy Developers</h2>
    </header>
  );
}
