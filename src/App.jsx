import Footer from "./App/Footer";
import Header from "./App/Header";


function App() {
  return (
    <>
    <html>
    <Header/>
    <body>
    <div className="metin">
      <h3 className="baslik">Eğitim Durumu</h3> 
      <p className="egitim">
        <li className="liste">Selçuk Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği</li>
        <li className="liste">Şükrü Doruk Fen ve Sosyal Bilimler Proje Lisesi </li>
      </p>
      <br/>
      <hr/>
      <br/>
      <h3 className="baslik" > Kimdir?</h3>
      <p>
       Bu projenin yani blog yazma kısmının nasıl yapılması gerektiğini tam çözemedim. <br/>
       Ama bir şeyler yazmam gerekiyordu. Bence Blog reactta bu haftayı tam olarak karşılamıyor. <br/>
       Hesap makinesini burda geliştirmek daha üst düzey olurdu. <br/>
       Projemi zamandan dolayı fazla uğraşılmamış olarak teslim ediyorum. Yetiştirmeye çalışıyorum

      </p>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <footer><Footer/></footer>
    </div>
    
    </body>
    </html>
    </>
  );
}
export default App;