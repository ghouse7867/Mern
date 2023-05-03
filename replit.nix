{ pkgs }: {
	deps = [
		pkgs.nixStable
  pkgs.nixFlakes
  pkgs.nixStatic
  pkgs.nixFlakes
  pkgs.nixStatic
  pkgs.nixStable
  pkgs.nodejs
  pkgs.nodejs-16_x
  pkgs.nodejs-16_x
  pkgs.cd Server
  pkgs.mongodb-3_4
  pkgs.nodejs-18_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}