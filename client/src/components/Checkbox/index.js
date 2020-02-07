import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Container, Row, Col } from "../Grid";
import "./checkbox.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    GitHub: false,
    SimplyHired: false,
    Indeed: false,
    Monster: false,
    USAjobs: false,
    Glassdoor: false
  });


  // console.log("State is GitHub: " + state.GitHub)
  // console.log("State is SimplyHired" + state.SimplyHired)
  // console.log("State is Indeed" + state.Indeed)
  // console.log("State is Monster" + state.Monster)
  // console.log("State is USAjobs" + state.USAjobs)
  // console.log("State is Glassdoor" + state.Glassdoor)
  
  
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { GitHub, SimplyHired, Indeed, Monster, USAjobs, Glassdoor} = state;
  const error = [GitHub, SimplyHired, Indeed, Monster, USAjobs, Glassdoor].filter(v => v).length !== 7;

  
  return (
    <div className={classes.root} >
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend">Job Search Engines</FormLabel>
        <FormGroup >
          <Row>
            <Col size="xs-2" >
              <FormControlLabel
              control={<Checkbox checked={GitHub} onChange={handleChange('GitHub')} value="GitHub" />}
              label="GitHub"
              />
            </Col>
       
            <Col size="xs-2" >
              <FormControlLabel
              control={<Checkbox checked={SimplyHired} onChange={handleChange('SimplyHired')} value="SimplyHired" />}
              label="SimplyHired"
              />
            </Col>

            <Col size="xs-2" >
              <FormControlLabel
              control={<Checkbox checked={Indeed} onChange={handleChange('Indeed')} value="Indeed" />}
              label="Indeed"
              />
            </Col>

            <Col size="xs-2" >
              <FormControlLabel
              control={<Checkbox checked={Monster} onChange={handleChange('Monster')} value="Monster" />}
              label="Monster"
              />
            </Col>

            <Col size="xs-2" >
              <FormControlLabel
                control={ <Checkbox checked={USAjobs} onChange={handleChange('USAjobs')} value="USAjobs" />}
                label="USAjobs"
              />
            </Col>

            <Col size="xs-2" >
              <FormControlLabel
                control={<Checkbox checked={Glassdoor} onChange={handleChange('Glassdoor')} value="Glassdoor" />}
              label="Glassdoor"
            />
            </Col>
          </Row>
        </FormGroup>
      </FormControl>
    </div>
  );
}
