const WelcomeMessage = ({onGetPostsClick}) => {
    return ( 
        <>
       
            <div className="px-4 py-5 my-5 text-center">
    
    <h2 className="display-5 fw-bold">Currently No Posts...</h2>
    <div className="col-lg-6 mx-auto">
      
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" onClick={onGetPostsClick} className="btn btn-primary btn-lg px-4 gap-3 m-4">Fetch posts from Server</button>
      </div>
    </div>
  </div>
        </>
     );
}
 
export default WelcomeMessage;