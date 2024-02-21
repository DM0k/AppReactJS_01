import CustomCheckBox from "@/components/CustomCheckBox";
import CustomImputLabel from "@/components/CustomImputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import Subtitulo from "@/components/Subtitulo";
import Titulo from "@/components/Titulo";

export default function Home() {
  return (  
    <div className="container-fluid">
      <Titulo></Titulo>
      <Subtitulo texto="Estou Aqui!"></Subtitulo>
      <div className="row">
      <CustomImputLabel id="txtNome" texto="Nome" col="8"/>
      <CustomImputLabel id="txtPreco" texto="Preço" col="4"/>
      <CustomTextAreaLabel id="txtDescrição" texto="Descrição" col="12"/>
      <CustomImputLabel id="txtImagem" texto="Imagem" col="12"/>
      <CustomCheckBox id="txtDisponivel" texto="Disponível" col="6"/>
      <CustomCheckBox id="txtNovidade" texto="Novidade" col="6"/>
      </div>
    </div>

  );
}
