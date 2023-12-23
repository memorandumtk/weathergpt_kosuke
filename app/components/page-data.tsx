import { Illustration } from "./illustration";
import { Footer } from "./footer";

export function PageData({ data }: { data: any }) {
// type PageDataProps = {
//   data: any; // Replace 'any' with a more specific type if possible
//   location: GeolocationCoordinates | null;
// };

// // Apply the type to the PageData component
// const PageData = ({ data, location }: PageDataProps) => {
  const date = new Date().toISOString();
  return (
    <>
      <main>
        <a
          target="_blank"
          href="https://chatg.pt/weather"
          rel="noreferrer"
          className="pill"
        >
          Deploy your own to Vercel
        </a>
        <h1>WeatherGPT</h1>
        <p className="description">
          ChatGPT Plugin to get the weather of any given location
        </p>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Your Location</span>
            <span className="region">
              <strong>{data.location.name}</strong>
            </span>
          </div>
          <div className="info">
            <span>Current Temperature</span>
            <strong>
              {data.current.temp_c}°C / {data.current.temp_f}°F
            </strong>
          </div>
        </div>
      </main>

      <Footer>
        <p>
          Generated at {date} by{" "}
          <a
            href="https://vercel.com/docs/concepts/functions/edge-functions"
            target="_blank"
            rel="noreferrer"
          >
            Vercel Edge Runtime
          </a>
        </p>
      </Footer>
    </>
  );
};

export default PageData;
