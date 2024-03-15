import "./Options.css";
import Icon from '@mdi/react';
import { mdiImagePlus } from '@mdi/js';

function Input({ label }) {
  return (
    <>
      <div className="input">
        <label htmlFor="">{label}</label>
        <input type="text" />
      </div>
    </>
  );
}

export default function Options() {
  return (
    <>
      <div className="form-container">
        <form action="">
          <legend>Personal Credentials</legend>
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Phone Number" />
          <div className="flex">
            <button><Icon path={mdiImagePlus} size={1} />Import Picture</button>
          </div>
        </form>
      </div>
    </>
  );
}
