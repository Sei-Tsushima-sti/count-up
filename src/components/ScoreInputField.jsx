import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// スコア入力
const basePointList = [...Array(20)].map((v, i) => i + 1);
export const ScoreInputField = (props) => {
  // ドロップダウンリストの数値を把握
  const [selectedScore, setSelectedScore] = useState(1);
  const onChangeDropDown = (e) => {
    setSelectedScore(parseInt(e.target.value));
  };
  //マルチプルエリアボタンを押したときの動作
  const { score, setScore } = props;
  const onClickSingleButton = () => {
    setScore(score + selectedScore);
  };
  const onClickDoubleButton = () => {
    setScore(score + selectedScore * 2);
  };
  const onClickTripleButton = () => {
    setScore(score + selectedScore * 3);
  };

  return (
    <div>
      <br />

      <TextField
        select
        fullWidth
        label="Select"
        defaultValue="1"
        onChange={onChangeDropDown}
        value={selectedScore}
      >
        {basePointList.map((point) => (
          <MenuItem key={point} value={point}>
            {point}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <Grid container spacing={2}>
        <Button
          variant="outlined"
          size="large"
          onClick={onClickSingleButton}
          fullWidth
        >
          Single
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={onClickDoubleButton}
          fullWidth
        >
          Double
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={onClickTripleButton}
          fullWidth
        >
          Triple
        </Button>
        <Button variant="outlined" color="error" size="large" fullWidth>
          Miss
        </Button>
      </Grid>
    </div>
  );
};
