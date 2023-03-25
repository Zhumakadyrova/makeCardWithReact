import Article from "./Article";
import Card from "./Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Article
        className="image"
        url="https://cdn.britannica.com/41/7241-050-F8F291A0/Flag-Kyrgyzstan.jpg?w=400&h=235&c=crop"
      >
        <h1>Kyrgyzstan</h1>
        <p className="paragraph">
          Kyrgyzstan, country of Central Asia. It is bounded by Kazakhstan on
          the northwest and north, by China on the east and south, and by
          Tajikistan and Uzbekistan on the south and west. Most of Kyrgyzstan’s
          borders run along mountain crests. The capital is Bishkek (known from
          1862 to 1926 as Pishpek and from 1926 to 1991 as Frunze).
        </p>
        <h2 className="h2"> Relief</h2>
        <p>
          Kyrgyzstan is above all a mountainous country. At its eastern
          extremity, next to the Uighur Autonomous Region of Sinkiang, China,
          rises Victory (Pobedy) Peak, at 24,406 feet (7,439 metres)
          Kyrgyzstan’s highest peak. Mount Khan-Tengri (22,949 feet) is on the
          border with Kazakhstan. These mountains stand in the core of the Tien
          Shan system, which continues eastward into China. On the southern
          border lie the Kok Shaal-Tau, Alay, Trans-Alay (Zaalay), and Atbashi
          ranges.
        </p>
      </Article>
      <Card
        className="card-image"
        image="https://cdn.britannica.com/84/183684-050-DF8A4D4A/World-Data-Locator-Map-Kyrgyzstan.jpg?w=300"
        textUrl="https://cdn.britannica.com/84/183684-050-DF8A4D4A/World-Data-Locator-Map-Kyrgyzstan.jpg"
      >
        Kyrgyzstan
      </Card>
      <Card
        className="card-image"
        image="https://cdn.britannica.com/53/7253-050-0350630D/Kyrgyzstan-map-features-locator.jpg?w=300"
        textUrl="https://cdn.britannica.com/53/7253-050-0350630D/Kyrgyzstan-map-features-locator.jpg"
      >
        Physical features of Kyrgyzstan
      </Card>
    </div>
  );
}
