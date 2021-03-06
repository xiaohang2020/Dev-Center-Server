<?php


namespace thans\jwt\claim;

use thans\jwt\exception\TokenExpiredException;

class Expiration extends Claim
{
    protected $name = 'exp';

    public function validatePayload()
    {
        if (time() >= (int)$this->getValue()) {
            throw new TokenExpiredException('登录状态已过期！');
        }
    }
}
