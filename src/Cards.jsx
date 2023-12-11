function Cards(props) {
    return (
        <div className="container mt-4">
            <div className="row p-1 bg-success">
                {
                    props.Card.map((element) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-12 mt-1 mb-1 bg-light">
                                <h3 className="text-center">
                                    {element.name}
                                </h3>
                                <img src={element.img} width="100%" alt="Car Image" />
                                <br />
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards;