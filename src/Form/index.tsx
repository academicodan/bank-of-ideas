import style from './styles.module.scss'


export function Form() {
  return (
    <div className={style.formContainer}>
      <div>
        <h1 id="title" className={style.title}>Cadastro de ideias</h1>
        <p id="caption" className={style.caption}>Preencha as informações</p>

        <form action="">
            <div>
              <label htmlFor="team">
                <strong>
                Nome do Time
                </strong>
                </label>
              <input type="text" name="team" id="team" required/>
            </div>

            <div className={style.field}>
              <label htmlFor="responsible">
                <strong>
                Responsavel
                </strong>
                </label>
              <input type="text" name="responsible" id="responsible" required/>
            </div>

            <div  className={style.field}>
              <label htmlFor="members">
                <strong>
                  Quantidade de membros
                </strong>
              </label>
              <input type="number" name="members" id="members" required/>
            </div>
            
            <label htmlFor="email">
              <strong>
                Email
              </strong>
            </label>
            <input type="email" name="email" id="email" required/>

            <div  className={style.field}>
              <label htmlFor="sectors">
                <strong>
                  Setor para desenvolvimento
                </strong>
              </label>
              <select name="sectors" id="sectors" required>
                <option selected disabled value="">Selecione</option>
                <option value="">Cidades inteligentes</option>
                <option value="">Cidades inteligentes</option>
                <option value="">Cidades inteligentes</option>
                <option value="">Cidades inteligentes</option>
                <option value="">Cidades inteligentes</option>
                <option value="">Cidades inteligentes</option>
              </select>
            </div>
          <div  className={style.field}>
            <br/>
            <label htmlFor="idea">
              <strong>
                Descreva a sua ideia
              </strong>
            </label>
            <textarea name="idea" id="idea"rows={8} style={{width:"34.25rem"}} required></textarea>
          </div>
          <button type="submit" className={style.buttonSubmit}>Submeter ideia</button>
        </form>
      </div>
    </div>
  )
}


// p e span 