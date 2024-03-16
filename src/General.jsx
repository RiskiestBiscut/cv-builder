import InputGroup from "./InputGroup";


const General = ({ value, onChange }) => {
      return (
        <div className="form-container">
            <h2>General Info</h2>
            <InputGroup
                type={"text"}
                id={"fullName"}
                label={"Full Name"}
                placeholder={"Bob Johson"}
                value={value.fullName}
                data-key={"fullName"}
                onChange={onChange}
            />
            <InputGroup
                type={"text"}
                id={"email"}
                label={"Email"}
                placeholder={"Bob.Johson@email.com"}
                value={value.email}
                data-key={"email"}
                onChange={onChange}
            />
            <InputGroup
                type={"text"}
                id={"phone"}
                label={"Phone"}
                placeholder={"888-888-8888"}
                value={value.phone}
                data-key={"phone"}
                onChange={onChange}
            />
            <InputGroup
                type={"text"}
                id={"location"}
                label={"Location"}
                placeholder={"Toronto, ON"}
                value={value.location}
                data-key={"location"}
                onChange={onChange}
            />
        </div>
      );
}

export default General
