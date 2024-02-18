const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            <h2>Dashboard</h2>
            <div>{children}</div>
        </div>
    );
};

export default DashboardLayout;
