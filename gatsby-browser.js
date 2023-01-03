const React = require('react');
const { RecoilRoot } = require('recoil');
exports.wrapRootElement = ({ element }) => {
    return (
        <RecoilRoot>{element}</RecoilRoot>
    )
}