import '../App.css'

function Input({ label, placeholder }) {
    return (
        <div className="input-container">
          <p>{label}</p>
          <input placeholder={placeholder} className="input-field" />
        </div>
      );
}

export default Input