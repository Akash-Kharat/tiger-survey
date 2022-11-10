import './QuestionType.css';
const QuestionType = ({questionType}) => {
    return (<div className="row">
        <div className="col-4"></div>
        <div className="col-4 text-center">
            <form>
                <div class="form-group">
                    <label>Select Question Type</label>
                    <select className="form-control" id="questionType">
                        {questionType.map((data)=>{
                          return  <option>{data}</option>
                        })}
                    </select>
                </div>
            </form>
        </div>
        <div className="col-4"></div>
    </div>)
}
export default QuestionType;