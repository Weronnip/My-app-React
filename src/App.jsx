import './App.css'

function App() {

  return (
   <section className='App'>
    <h1 className='rtext'>My app</h1>
    <div className="block">
      <h4 className="mtext">History HTML5</h4>
      <p className="text">
        You’ve probably seen many references to HTML5,<br /> 
        along with mentions of certain features being “Deprecated” or “New” in HTML5.<br /> 
        This can sometimes be confusing,<br /> 
        as you find out that the way you thought you were “supposed” to do something is now not the right way at all.<br />
        It can also be annoying — especially since most of these “deprecated features”<br /> 
        still work on most browsers.<br /> 
        Why bother learning a new way of doing something if the old way works just fine?<br />
        And, of course, it can be difficult to find the right information sometimes.<br /> 
        Content on the internet doesn’t live forever… but almost.<br /> 
        And the older content is, the more likely it is that you’ll find it on a search engine.<br />
        <br />
        All things being equal, Google and the others prefer older content.<br /> 
        Also, older content has had more time to acquire backlinks.<br /> 
        This means that you will often find out-of-date tutorials <br /> 
        when you are looking for information about HTML. <br />

        <br />

       <a href="https://html.com/html5/#ixzz7ykir7L2W" target='_blank'>Read more</a>
       <br />
       {/* <Router>
        <Routes>
          <Route path="/"></Route>
        </Routes>
       </Router> */}
      </p>
    </div>
    <div className="img">
      <img className='imgs' src="https://otvet.imgsmail.ru/download/u_9862410adb02d30b16527da7aff90e81_800.jpg" alt="By Tim Berners-Lee" />
      <em className='name'>By Tim Berners-Lee</em>
    </div>
   </section>
  );
}

export default App
