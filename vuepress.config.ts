module.exports = {
  title: 'KodaDot Documentation',
  description: 'Better understanding KodaDot',
  public: 'docs/assets',
  themeConfig: {
    navbar: [
      {
        text: 'How to get started',
        children: ['how_to_create_wallet.md', 'minting.md','how_to_top_up_wallet.md'],
      },
      {
        text: 'KodaDot',
        children: [ 
	  { 
	    text: 'kodadot.xyz', 
	    link: 'https://kodadot.xyz'
          }, 
          { 
            text: 'kodadot/nft-gallery',
            link: 'https://github.com/kodadot/nft-gallery/issues'
          }
        ]
      }
    ],
  },
}
