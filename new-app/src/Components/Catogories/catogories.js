import styleC from "./ct.module.css";
import Items from "./items";

// import img5 from "../../assets/beverages.jpg";



function Catogories() {
    let img1 = "https://onmogul.s3.amazonaws.com/uploads/story/thumbnail/59612/1b9c68e3ce.png";
    let img2 = 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80';
    let img3 = "https://images.unsplash.com/photo-1628689469838-524a4a973b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
    let img4 = "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

    let catogories = [
        {
            name: "Groceries",
            link: 'grocery',
            image: img1
        },
        {
            name: "Vegetables",
            link: 'vegetables',
            image: img2
        },
        {
            name: "Fruits",
            link: 'fruits',
            image: img3
        },
        {
            name: "Snacks",
            link: 'snacks',
            image: img4
        }
        // ,
        // {
        //     name: "Beverages",
        //     link: 'beverages',
        //     image: img5
        // }
    ]

    return (
        <div className={styleC.container1}>
            <div className={styleC.container}>
                {
                    catogories.map((data) => {
                        return (
                            <Items key={Math.random()} name={data.name} link={data.link} image={data.image}></Items>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catogories;