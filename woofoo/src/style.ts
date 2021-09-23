export const Styles: { [key: string]: React.CSSProperties } = {
    navBar: {
        padding: "10px",
        background: "#e66760",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    app: {
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "10% 90%",
    },

    stage: {
        display: "grid",
        gridTemplateColumns: "40% 60%",
    },

    side: {
        padding: "10px",
        display: "flex",
        background: "#FFE79F",
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: "5%",
        rowGap: "5%",
        justifyContent: "space-between",
        alignItems: "start",
    },

    fieldButton: {},
    signIn: {},
    formButtons: {
        background: "#FFE79F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    currentFormEditing: {
        display: "grid",
        gridTemplateRows: "90% 10%",
        gridTemplateColumns: "1fr",
        overflow: "hidden",
    },
    currentFormPreview: {
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        overflow: "scroll",
    },
};
