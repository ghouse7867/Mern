{ pkgs }: {
	deps = [
	pkgs.nixStable
  pkgs.nixFlakes
  pkgs.nixStatic

  pkgs.mongodb-3_4
  pkgs.nodejs-18_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}