import './App.css';
function Menu(props) {
    return (
        <div class="card">
            <img class="card-img-top" src={props.image} />
            <div class="card-body">
                <div className='nom'>
                    <h5 class="card-title">{props.nom}</h5>
                    <p class="card-text">{props.description}</p>
                    <h4 class="card-title">{props.prix}</h4>
                </div>
               
               
                <a href="#" class="btn btn-primary">Commander</a>
            </div>
        </div>
    )
}

export default Menu