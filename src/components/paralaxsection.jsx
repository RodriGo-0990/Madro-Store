import "../css/paralax.css";

export default function ParalaxSection({foto}){
    return(
        <section className="paralax-wraper" style={{backgroundImage:'url('+foto+')'}}>
            <div className="inner-paralaxe">
            </div>
        </section>
        
    )
}