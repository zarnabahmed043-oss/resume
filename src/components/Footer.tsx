const Footer = () => {
  return (
    <footer className="py-6 bg-card border-t border-border text-center">
      <p className="font-body text-sm text-muted-foreground">
        Copyright &copy; {new Date().getFullYear()} by Zarmeen Ahmed | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
