import React from "react";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <div className="h-fit w-full flex items-center justify-around flex-wrap px-40 py-14">
      <Card
        title={"Smartphones"}
        image={
          "https://images.pexels.com/photos/583847/pexels-photo-583847.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />
      <Card
        title={"Mens-shirts"}
        image={
          "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D"
        }
      />
      <Card
        title={"Women-dresses"}
        image={
          "https://images.unsplash.com/photo-1614098097306-c67b8020c04e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBkcmVzc2VzfGVufDB8fDB8fHww"
        }
      />
      <Card
        title={"skincare"}
        image={
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <Card
        title={"groceries"}
        image={
          "https://images.unsplash.com/photo-1543168256-418811576931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcmllc3xlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <Card
        title={"women-shoes"}
        image={
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <Card
        title={"mens-watches"}
        image={
          "https://images.unsplash.com/photo-1611353229944-bcf22ddcdf09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjB3YXRjaGVzfGVufDB8fDB8fHww"
        }
      />
      <Card
        title={"tops"}
        image={
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9wc3xlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <Card
        title={"sunglasses"}
        image={
          "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
        }
      />
    </div>
  );
};

export default Homepage;
