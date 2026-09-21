import './Header.css';

export interface HeaderProps {
  siteName?: string;
  loggedIn?: boolean;
  userName?: string;
  onSignIn?: () => void;
  onSignOut?: () => void;
}

export function Header({ siteName = 'Acme', loggedIn = false, userName = 'Alex', onSignIn, onSignOut }: HeaderProps) {
  return (
    <header className="app-header">
      <a className="app-header__brand" href="#home">{siteName}</a>
      <nav aria-label="Main navigation" className="app-header__nav">
        <a href="#products">Products</a><a href="#about">About</a>
      </nav>
      {loggedIn ? (
        <div className="app-header__account"><span>Hi, {userName}</span><button type="button" onClick={onSignOut}>Sign out</button></div>
      ) : (
        <button className="app-header__sign-in" type="button" onClick={onSignIn}>Sign in</button>
      )}
    </header>
  );
}
