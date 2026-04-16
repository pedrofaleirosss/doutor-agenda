import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-border w-full border-t py-6">
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col items-center justify-evenly gap-4 px-4 text-center text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} Doutor Agenda. Todos os direitos
          reservados. Desenvolvido por Pedro Faleiros
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/pedrofaleirosss"
            target="_blank"
            className="hover:text-primary flex items-center gap-1"
          >
            <Github size={16} />
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/pedro-faleiros123/"
            target="_blank"
            className="hover:text-primary flex items-center gap-1"
          >
            <Linkedin size={16} />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
