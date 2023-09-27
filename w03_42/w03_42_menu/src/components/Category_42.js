const Category_42 =({category}) => {
    console.log('menu',category);
    return (
        <>
            <div className="btn-container">                    
                        <button type="button" className="filter-btn" data-id="all">
                            all
                        </button>
                        <button type="button" className="filter-btn" data-id="breakfast">
                            breakfast
                        </button>
                        <button type="button" className="filter-btn" data-id="lunch">
                            lunch
                        </button>
                        <button type="button" className="filter-btn" data-id="dinner">
                            dinner
                        </button>
                        <button type="button" className="filter-btn" data-id="dessert">
                            dessert
                        </button>
                        <button type="button" className="filter-btn" data-id="shakes">
                            shakes
                        </button>
                
                
            </div>
        </>
    );
};

export default Category_42;