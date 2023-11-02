import { Button, Card, Divider } from "@mui/material";
import { useAppContext } from "../../customHook/AppContext";
export default function Delete({ item, objectsArray, setObjectsArray }) {
  const {postArr,setPostArr,save,setSave}=useAppContext();
    console.log(postArr);
    console.log(objectsArray);
  function handleDeletePost() {
    const updatedArray = objectsArray.filter((value) => value.id !== item.id);
    setObjectsArray(updatedArray);
    const updatedArray1= postArr.filter((value) => value.id !== item.id);
    setPostArr(updatedArray1)
    const updatedArray2=save.filter((value)=>value.id!==item.id)
    setSave(updatedArray2)
  }
  
    console.log(postArr);
    console.log(objectsArray);
  return (
    <Card sx={{ ml: 2 }}>
      <Button
        sx={{
          color: "black",
          "&:hover": { backgroundColor: "gray", width: 220 },
        }}
      >
        Report
      </Button>
      <Divider />
      <Button
        sx={{
          color: "black",
          "&:hover": { backgroundColor: "gray", width: 220 },
        }}
      >
        Unfollow
      </Button>
      <Divider />
      <Button
        sx={{
          color: "black",
          "&:hover": { backgroundColor: "gray", width: 220 },
        }}
      >
        Add to favourites
      </Button>
      <Divider />
      <Button
        sx={{
          color: "black",
          "&:hover": { backgroundColor: "gray", width: 220 },
        }}
      >
        Share to..
      </Button>
      <Divider />
      <Button
        onClick={handleDeletePost}
        sx={{
          color: "black",
          "&:hover": { backgroundColor: "gray", width: 220 },
        }}
      >
        Delete Post
      </Button>
      <Divider />
      <Button
        sx={{
          color: "black",
          "&:hover": { backgroundColor: "gray", width: 220 },
        }}
      >
        Cancel
      </Button>
    </Card>
  );
}
