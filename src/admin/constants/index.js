

const ERROR = {
  SUCCESS: [0, 'success'],

  // SYSTEM_ERROR xx
  NOT_IMPLEMENTED: [11, '不支持该方法'],
  UNKONWN_ERROR: [99, '未知错误'],

  // USER_ERROR 1xx
  NOT_LOGIN: [101, '未登录']
};

export {ERROR}