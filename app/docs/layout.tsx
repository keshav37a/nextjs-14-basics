const DocsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            <div>Current layout is docs</div>
            <div>{children}</div>
        </div>
    );
};

export default DocsLayout;
