// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";
export default function Product() {
  return (
    <div className={styles.container}>
      <header>
        <PageNav />
      </header>

      <main className={styles.product}>
        <section>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </section>
      </main>
    </div>
  );
}
