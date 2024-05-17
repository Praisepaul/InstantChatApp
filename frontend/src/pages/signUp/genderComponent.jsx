const GenderComponent = () => {
    return (
        <div className="flex">
            <div className="form-control mx-5">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text text-black">Male</span>
                    <input type="radio" name="gender" className="radio radio-success" checked />
                </label>
            </div>
            <div className="form-control mx-5">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text text-black">Female</span>
                    <input type="radio" name="gender" className="radio radio-success" />
                </label>
            </div>
        </div>
    )
}

export default GenderComponent