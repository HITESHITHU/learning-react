const parent=React.createElement
("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"I am reading h1 tag"),
            React.createElement("h2",{},"I am reading h2 tag"),
        ]
    )
);

console.log(parent);
const heading=React.createElement("h1",{},"Hello World! react");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
    