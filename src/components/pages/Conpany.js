
import styles from './Company.module.css'
import logo from '../../img/sobre.jpeg'
function Company () {
    return ( 
    
    <section className={styles.company_container}>
        
        <h1>"Acabamos de colher" </h1>
        <p>A Frexco é o resultado de uma enorme vontade de ver o campo e a cidade muito mais próximos e conectados. Nosso propósito é ser um elo que liga famílias agricultoras e você, para entregar frutas, verduras e legumes frescos diretamente na sua casa ou no seu estabelecimento.
        Acreditamos que podemos auxiliar para uma cadeia mais sustentável de entrega de alimentos, contribuindo também para o consumo consciente e ainda para a sua saúde.</p>
        <img src={logo} alt="frexco" />
    </section>)

}

export default Company