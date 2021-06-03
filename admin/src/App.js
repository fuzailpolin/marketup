import {useState, useEffect} from "react";


function App() {

    const [d, setDiv] = useState([]);


    useEffect(() => {
        let x = []
        for (let i = 0; i < 20000; i++) {
            x.push(i)
        }
        console.log(x)
        setDiv(x)
    }, []);


    return (
        <div>
            {
                d.map((v, i) => (
                    <span key={i} className={'p-2 bg-gray-700 transition rounded-full duration-100 hover:bg-red-900 inline-block'}>

                    </span>
                )
                )
            }
        </div>
    );
};

export default App;
