import Navbar from "./Navbar"
function Home() {
   return(
    <div>
        <Navbar></Navbar>
        <div className='menu'>
            <div className='menu-items'>
                <Menu image={process.env.PUBLIC_URL + 'salade-copieuse-saine-thon-haricots-verts-tomates-oeufs-pommes-terre-olives-noires-close-up-dans-bol-table.jpg'} description='Salade au thon,haricots vert, tomate, oeufs' nom='Salade' prix='5usd'></Menu>
                <Menu image={process.env.PUBLIC_URL + 'pates-penne-sauce-tomate-au-poulet-tomates-table-bois.jpg'} description='pates-penne-sauce-tomate-au-poulet' nom='Pates' prix='10usd'></Menu>
                <Menu image={process.env.PUBLIC_URL + 'nuggets-poulet-kfc-frites-mayonnaise-ketchup-salade-legumes.jpg'} description='frites au poulet avec salade' nom='Salade' prix='10usd'></Menu>
                <Menu image={process.env.PUBLIC_URL + 'burger-vue-face-stand.jpg'} description='Burger au poulet fromage' nom='Burger' prix='5usd'></Menu>
            </div>
        </div>
    </div>
   )
}