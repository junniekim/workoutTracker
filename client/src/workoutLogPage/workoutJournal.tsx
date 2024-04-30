interface WorkoutJournalProps {
  picture?: string;
  rate?: string;
  weight?: number;
  journal?: string;
  editing: boolean;
  dataChange?: (data: any) => void;
  weightChange?(data: any): void;
}
const WorkoutJournal: React.FC<WorkoutJournalProps> = ({
  picture,
  rate,
  weight,
  journal,
  editing,
  dataChange,
  weightChange,
}) => {
  return (
    <div className="col-12 col-lg-5 text-center">
      {editing ? (
        <div>
          <h4>Workout Journal</h4>
          <div className="mt-3">
            {picture && (
              <img src={picture} width="400px" className="img-fluid mb-2"></img>
            )}

            <button className="mb-2 btn btn-outline-secondary">
              Upload Image
            </button>
            <div className="row">
              <h5>How was your workout?</h5>
              <span className="col-2">Bad</span>
              <div className="col-8">
                <input
                  style={{ width: "100%" }}
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={rate || "5"}
                  onChange={(e) =>
                    dataChange &&
                    dataChange((prevState: any) => ({
                      ...prevState,
                      rate: Number(e.target.value),
                    }))
                  }
                />
              </div>

              <span className="col-2">Good</span>
            </div>
            <div className="mt-2 form-group">
              <h5>Log your body weight?</h5>
              <input
                type="number"
                placeholder="Weight"
                className="form-control"
                defaultValue={weight || ""}
                id="editTitle"
                onBlur={(e) =>
                  weightChange &&
                  weightChange((prevState: any) => ({
                    ...prevState,
                    weight: Number(e.target.value),
                  }))
                }
              />
            </div>
            <textarea
              style={{ width: "100%", height: "130px" }}
              className="mt-3"
              placeholder="Leave notes about your workout here!"
              defaultValue={journal || ""}
              onBlur={(e) =>
                dataChange &&
                dataChange((prevState: any) => ({
                  ...prevState,
                  journal: e.target.value,
                }))
              }
            ></textarea>
          </div>
        </div>
      ) : (
        <div>
          <h4>Workout Journal</h4>
          {!picture && !rate && !weight && !journal && (
            <div>No Content Yet</div>
          )}
          {picture && (
            <img
              src={picture}
              alt="abc"
              width="400px"
              className="img-fluid mb-2"
            ></img>
          )}
          {rate && <h5>Work out was {rate}</h5>}
          {weight && <h5>As of today, I weigh {weight} pounds</h5>}
          {journal && <p>{journal}</p>}
        </div>
      )}
    </div>
  );
};

export default WorkoutJournal;
