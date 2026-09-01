export default function GradientButton() {
  return (
    <>
      <style>{`
                .gradient-button {
                    position: relative;
                    overflow: hidden;
                    border: none;
                    z-index: 1;
                }

                .gradient-button::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
                    transition: all 0.4s ease;
                }

                .gradient-button:hover::after {
                    transform: scale(2) rotate(180deg);
                }
            `}</style>

      <button className="gradient-button px-8 py-3 rounded-xl text-white font-medium transition duration-300 hover:shadow-2xl">
        Button
      </button>
    </>
  );
}
