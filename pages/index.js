import { Emoji } from "@/components/Emoji";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: "80px" }}> {/* Add padding to account for fixed navbar */}
          <div style={{ textAlign: "center", padding: "50px" }}>
            <Emoji />
            <h1>Welcome to My Next.js Site!</h1>
            <p>This is a simple Next.js homepage.</p>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert("Button Clicked!")}
            >
              Click Me
            </button>
          </div>
        </div>
      </>
    );
  }