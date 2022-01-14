export async function getAllWines() {
    const [wines, setWines] = useState([]);
    const res = await fetch('http://localhost:3001/api/wines/all/0/24')
    const data = await res.json();
    setWines(data.wines)
};
export default wines;