const GenderComponent = ({onCheckBoxChange, selected}) => {
    return (
        <div className="flex">
            <div className="form-control mx-5">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text text-black">Male</span>
                    <input type="radio" name="gender" className="radio radio-success" 
                    checked={selected === "male"}
                    onChange={() => onCheckBoxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control mx-5">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text text-black">Female</span>
                    <input type="radio" name="gender" className="radio radio-success" 
                    checked={selected === "female"}
                    onChange={() => onCheckBoxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderComponent