import './App.css';
import {button , Alert} from 'react-bootstrap';

export default function Func(){

    return(
        <div>
            <button>Click me</button>

            {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
        </div>
    )
}